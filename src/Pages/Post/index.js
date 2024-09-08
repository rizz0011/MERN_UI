import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  Box,
} from "@mui/material";
import PostCard from "./PostCard";

export default function Post() {
  const [state, setState] = React.useState({});
  const [postData, setPostData] = React.useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  const fetchPost = async () => {
    const userId = localStorage.getItem("userID");
    const res = await fetch(
      `http://localhost:8000/post/post-details/${userId}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    const data = await res.json();
    setPostData(data);
  };

  React.useEffect(() => {
    fetchPost();
  }, []);

  const createPost = async () => {
    try {
      const userId = localStorage.getItem("userID");
      const res = await fetch("http://localhost:8000/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ ...state, userID: userId }),
      });
      const resData = await res.json();
      if (resData.success === false) {
        alert("Oops, something went wrong!");
      } else {
        alert("Post Created Successfully");
        setState({}); // Reset state after successful post creation
        fetchPost(); // Refresh the posts after a new one is created
      }
      console.log(resData);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2}>
        <Grid item sm={5}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item sm={12}>
                  <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                    Write Your Post Here
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="heading"
                    label="Heading"
                    name="heading"
                    value={state.heading || ""}
                    onChange={handleChange}
                    autoComplete="heading"
                    autoFocus
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextareaAutosize
                    margin="normal"
                    required
                    style={{ width: "99%" }}
                    minRows={7}
                    name="content"
                    value={state.content || ""}
                    onChange={handleChange}
                    placeholder="Content"
                  />
                </Grid>
                <Grid item sm={12}></Grid>
                <Grid item sm={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={createPost}
                  >
                    Create Post
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={7}>
          <PostCard postData={postData} />
        </Grid>
      </Grid>
    </Box>
  );
}

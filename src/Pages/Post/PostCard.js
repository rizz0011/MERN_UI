import React from "react";
import { Card, CardContent, Typography, Box, Container } from "@mui/material";

export default function PostCard({postData}) {


  return (
    <Container maxWidth="lg" sx={{ maxHeight:'80vh', overflow:'auto'}}>
      {postData.data?.map((post) => (
        <Card key={post.id} sx={{ mb: 4, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" component="h4" gutterBottom>
              {post?.heading}
            </Typography>
            <Typography variant="body1">{post?.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

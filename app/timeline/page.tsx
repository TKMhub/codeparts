import React from 'react'
import { Box, Avatar, Typography, Tab, Tabs } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  avatar: {
    marginRight: '1rem'
  },
  tab: {
    width: '100%',
    marginBottom: '1rem'
  },
  tweet: {
    display: 'flex',
    marginBottom: '1rem'
  }
})

const tweets = [
  { color: 'blue', username: 'テスト①', content: 'テスト投稿①', timestamp: '2023-06-16 12:00' },
  { color: 'red', username: 'テスト②', content: 'テスト投稿②', timestamp: '2023-06-16 13:00' },
  { color: 'yellow', username: 'テスト③', content: 'テスト投稿③', timestamp: '2023-06-16 14:00' },
]

const Timeline = () => {
  const classes = useStyles()
  
  return (
    <Box>
      <Box className={classes.header}>
        <Avatar className={classes.avatar}>自分</Avatar>
        <Typography variant="h4">サービスロゴ</Typography>
      </Box>
      
      <Tabs className={classes.tab} value={0} indicatorColor="primary">
        <Tab label="ツイート" />
        <Tab label="記事" />
      </Tabs>
      
      {tweets.map((tweet, index) => (
        <Box key={index} className={classes.tweet}>
          <Avatar className={classes.avatar} style={{ backgroundColor: tweet.color }}>{tweet.color[0].toUpperCase()}</Avatar>
          <Box>
            <Typography variant="subtitle1">{tweet.username}</Typography>
            <Typography variant="body1">{tweet.content}</Typography>
            <Typography variant="caption">{tweet.timestamp}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Timeline

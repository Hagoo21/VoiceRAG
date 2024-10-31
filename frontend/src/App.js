import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, TextField, Card, CardContent, Typography, Fab, Container, Box } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import './App.css';

function App() {
  const [transcript, setTranscript] = useState('');
  const [messages, setMessages] = useState([]);

  const stopListening = () => {
    const newTranscript = 'What is the capital of France?'; // Placeholder example
    const newResponse = 'The capital of France is Paris.';  // Placeholder example
    setTranscript(newTranscript);

    setMessages([...messages, { type: 'user', text: newTranscript }, { type: 'system', text: newResponse }]);
  };

  const handleTextSubmit = () => {
    const newResponse = 'The capital of France is Paris.';  // Placeholder example
    setMessages([...messages, { type: 'user', text: transcript }, { type: 'system', text: newResponse }]);
    setTranscript('');  // Reset the input field
  };

  return (
    <div className="App">
      {/* AppBar for navigation */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Voice-controlled RAG Demo
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Chat Area */}
      <Container maxWidth="sm" sx={{ mt: 4, mb: 12 }}>
        <Box sx={{ height: '60vh', overflowY: 'auto', mb: 2 }}>
          {/* Display the conversation */}
          {messages.map((msg, index) => (
            <Card
              key={index}
              sx={{
                mb: 2,
                bgcolor: msg.type === 'user' ? '#e3f2fd' : '#f1f8e9',
                alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              <CardContent>
                <Typography variant="body1">
                  {msg.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Text input and Submit button */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your question..."
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
          />
          <IconButton color="primary" onClick={handleTextSubmit}>
            <SendIcon />
          </IconButton>
        </Box>
      </Container>

      {/* Floating Microphone Button */}
      <Fab
        color="primary"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={stopListening}
      >
        <MicIcon />
      </Fab>
    </div>
  );
}

export default App;

# Functions for text generation using Llama.cpp

import gradio as gr
from gradio_pdf import PDF


def transcribe(audio):
    
    sample_rate, y = audio
    y = np.int16(y/np.max(np.abs(y)) * 32767)
    byte_io = io.BytesIO()
    write(byte_io, sample_rate, y)
    result_bytes = byte_io.read()
    
    audio_data = sr.AudioData(result_bytes, sample_rate, 2)
    r = sr.Recognizer()
    text = r.recognize_google(audio_data)
    return text




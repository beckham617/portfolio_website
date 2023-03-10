import React, { useState } from 'react';
import {  MainStyle, InputStyle } from './OpenaiImageStyles';
import { Configuration, OpenAIApi } from "openai";

const OpenaiImage = () => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  console.log('apiKey = ', apiKey);
  const configuration = new Configuration({
    apiKey
  });

  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const generateImage = async () => {
    const openai = new OpenAIApi(configuration);
    setIsLoading(true);

    console.log('isLoading = ', isLoading);
    try{
      const res = await openai.createImage({
        prompt,
        n: 1,
        size: "1024x1024",
      });
      
      setIsLoading(false)
      console.log('isLoading = ', isLoading);
      console.log('Image url = ', res.data.data[0].url);
      setImageUrl(res.data.data[0].url);
    }catch(e){
      setIsLoading(false)
    }
  }

  return (
      <MainStyle>
      <h3>Generate an image using Open AI API</h3>
      <InputStyle>
        <input
          className='app-input'
          onChange={(e) => setPrompt(e.target.value)} 
          placeholder="Enter something to generate image..."/>
        {
          isLoading ? ''
            : (<button onClick={generateImage} className="">Generate Image</button>)
        }
      </InputStyle>
      <img src={imageUrl} ></img>
   
    </MainStyle>
  );
};

export default OpenaiImage;

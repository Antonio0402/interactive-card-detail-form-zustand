import axios from "axios";

type CardInfo = {
  holder: string,
  number: string,
  month: string,
  year: string;
  cvc: string;
}

const submitApi = axios.create({
  baseURL: "/.netlify/functions"
});

export const submitPaymentCard = async (options: CardInfo) => {
    return await submitApi.post("/submission-created", JSON.stringify(options), {
      headers: { 
        'Content-Type': 'application/json',
      },
      withCredentials: true
    })
}
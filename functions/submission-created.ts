import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

type CardInfo = {
  holder: string,
  number: string,
  month: string,
  year: string;
  cvc: string;
}

const cards = [
  {
    id: 1,
    "holder": "Jane Appleseed",
    "number": "1234567891230000",
    "month": "04",
    "year": "23",
    "cvc": "123"
  }
]

const handler: Handler = async (event: HandlerEvent, _context: HandlerContext) => {
  if (!event.body) {
    return {
      statusCode: 406,
      body: JSON.stringify({ message: "Card payment information is incorrect" })
    };
  }
  if(event.httpMethod === "POST") {
    const  { holder, number, month, year, cvc  } = JSON.parse(event.body) as CardInfo;
    const targetCard = cards.find((card) => 
      card.holder === holder &&
      card.number === number &&
      card.month === month && 
      card.year === year && 
      card.cvc === cvc
    )
    if(targetCard) {
      return {
        statusCode: 202,
        body: JSON.stringify(targetCard)
      }
    }
  }
  return {
    statusCode: 406,
    body: JSON.stringify({ message: "Card payment information is not accepted" })
  }
} 

export { handler };
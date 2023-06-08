
import express, { Request, Response } from 'express';
const app = express();

app.get('/image', (req: Request, res: Response) => {
    // Return the image URL
    const imageURL = 'https://www.tranzila.com/images/virtual-shop-payment.jpg';
    res.json({ url: imageURL });
});

app.listen(3001, () => {
    console.log('Express server is running on port 3001');
});

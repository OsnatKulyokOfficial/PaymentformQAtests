const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

app.post('/api/payment', (req, res) => {
  // Process form data and make API call to payment processing service
  // ...

  const paymentFormLink = 'https://payment-service.com/payment-form' // Replace with actual API response

  res.json({ paymentFormLink })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

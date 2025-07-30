import Stripe from "stripe"
const stripe = new Stripe("sk_test_51OEU4xIlkUVaCxOFk3OOjelWz1Pgfd9z9A8Ttzg37E0YWiuuiC6mqzAzgCN25z9UvofJwygKl8mthjsdlgoo5Oxb00CpnrIiU5")

// export const payment = async (req, res) => {
//     try {
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: req.body.amount,
//             currency: 'pkr',
//             payment_method: 'pm_card_visa',
//             payment_method_types: ['card'],
//         });
//         console.log(paymentIntent);
//         res.status(200).json({
//             success: true
//         })
//     } catch (error) {
//         return res.status(500).json({
//             message: error.message
//         })
//     }
// }


export const paymentLink = async (req, res) => {
    try {
        const price = await stripe.prices.create({
            currency: 'usd',
            unit_amount: 200,
            product: 'prod_SlLD8LFCTs27FM',
        });
        console.log(price);
        const paymentLink = await stripe.paymentLinks.create({
            line_items: [
                {
                    price: price.id,
                    quantity: req.body.quantity,
                },
            ],
        });

        console.log(paymentLink);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

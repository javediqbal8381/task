//this is file in the routes folder

const express =require('express')
const router =express.Router()
const bodyParser =require('body-parser')
const exphbs=require('express-handlebars')
const nodemailer=require('nodemailer')
const app=express()



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

router  .get('/',(req,res)=>{

})

router.post('/sendmail  ',async (req,res)=>{
    const output=`
    <p>You have new contact request</>p
    <h3>contact details</h3>

    <ul>
        <li>Name ${req.body.name}</li>
        <li>Email ${req.body.email}</li>
        <li>Number ${req.body.number}</li>

    </ul>
    <h3>Message</h3>
    <p>${req.body.message}<p/>

    `;

   // Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'javediqbal5252@outlook.com', // generated ethereal user
    pass: 'personal.12@bg', // generated ethereal password
  },
  tls:{
      rejectUnauthorized:false
  }
});

// send mail with defined transport object
let info = await transporter.sendMail({
  from: '"xyz cars 👻" <javediqbal5252@outlook.com>', // sender address
  to: "jiwhat762@gmail.com", // list of receivers
  subject: "xyz cars contact request", // Subject line
  text: "Hello world?", // plain text body
  html: output, // html body
});

console.log("Message sent: %s", info.messageId);
// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// Preview only available when sending through an Ethereal account
console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
})

module.exports=router;

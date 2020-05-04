const settingModel = require("./settingsModel");
const dataModel = require("./dataModel");
var nodemailer = require("nodemailer");

exports.saveSettings = async (req, res) => {
  try {
    let medias = await settingModel.findOne();

    if (medias) {
      let data = await settingModel.findOneAndUpdate(
        {
          _id: medias._id,
        },
        { $set: req.body },
        {
          new: true,
        }
      );
      if (data) {
        res.status(200).send({
          msg: "Status Updated Successfully",
          res: data,
        });
      }
    } else {
      let data = await settingModel.create(req.body);
      if (data) {
        res.status(200).send({
          msg: "Status Updated created",
          res: data,
        });
      } else {
        res.status(200).send({
          msg: "Status Updated created",
          res: data,
        });
      }
    }
  } catch (e) {
    console.log("*****Error", e);
    res.status(500).send({
      msg: "error occurred",
      res: e,
    });
  }
};

exports.sendandsavemail = async (req, res) => {
  try {
    let settings = await settingModel.findOne();

    var transporter = nodemailer.createTransport({
      service: settings.smtp,
      auth: {
        user: settings.user, // generated ethereal user
        pass: settings.pass,
      },
    });

    let data = await dataModel.create(req.body);
    if (data) {
      let mailOptions = {
        from: settings.from, // sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.text, // plain text body
        html: req.body.html, // html body
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }

        res.status(200).send({
          msg: "Email sent: " + info.response,
          res: data,
        });
      });
    } else {
      res.status(500).send({
        msg: "error occurred",
        res: "",
      });
    }
  } catch (e) {
    console.log("*****Error", e);
    res.status(500).send({
      msg: "error occurred",
      res: e,
    });
  }
};

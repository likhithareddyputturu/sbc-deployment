module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env("SMTP_PORT", 465),
        auth: {
          user: "likhithareddyputtur09@gmail.com",
          pass: "ktoo oqmj auhm vcyy",
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "likhithareddyputtur09@gmail.com",
        defaultReplyTo: "likhithareddyputtur09@gmail.com",
      },
    },
  },
});

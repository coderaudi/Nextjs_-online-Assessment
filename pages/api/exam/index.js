export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    console.log("you are sumiting data", req.body);

    res.status(201).json({
      message: "data saved too backend",
      yourdata: req.body,
    });
  } else {
    // Handle any other HTTP method
    res.status(200).json("all ok");
  }
}

import multer from "multer";

export function calculatePayment({
  unitPrice,
  quantity,
  shippingPrice,
  multiplier,
  skipMultiplier = false,
}) {
  shippingPrice = shippingPrice || 0;
  if (skipMultiplier) multiplier = 1;

  const totalPrice = unitPrice * multiplier * quantity;
  const shippingTotal = shippingPrice * multiplier;

  return totalPrice + shippingTotal;
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + "-" + Date.now() + "." + extension);
  },
});

export const upload = multer({ storage });

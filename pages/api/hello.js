export default function handler(req, res) {
	const email = req.body.email;

	res.setPreviewData({});
	res.end(`Too much pareee! ${email}`);
}

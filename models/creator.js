const Creator = {
  username: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true},
  image: { type: String },
  items: { type: Array } //array of references
}
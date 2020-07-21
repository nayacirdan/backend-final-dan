const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FilterSchema = new Schema(
    {

        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        filterParam: {
            type: String,
            required: true
        },
        categories: {
            type: Array,
            required: false
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    {strict: false}
);

module.exports = Filter = mongoose.model("filters", FilterSchema);

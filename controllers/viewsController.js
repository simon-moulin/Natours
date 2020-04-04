const Tour = require('./../model/tourModel');
const catchAsync = require('./../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res) => {
    //1) Get tour data from collection
    const tours = await Tour.find();
    //2) Build template

    // 3) Render that template using our data from 1)

    res.status(200).render('overview', {
        title: 'All Tours',
        tours
    });
});

exports.getTour = catchAsync(async (req, res) => {
    const tour = await Tour.findOne({ slug: req.params.slug }).populate({
        path: 'reviews',
        fields: 'review rating user'
    });
    // 2) Create pug template

    res.status(200).render('tour', {
        title: `${tour.name} Tour`,
        tour
    });
});
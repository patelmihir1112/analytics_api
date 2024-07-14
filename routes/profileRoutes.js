const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const upload = require('../middlewares/multer');

router.post('/', upload.single('profileImage'), async (req, res) => {
    try {
        const profile = new Profile({
            ...req.body,
            profileImage: req.file.filename
        });

        const saveData = await profile.save();
        if(saveData){
           return res.status(200).json({
                status: 200,
                success: true,
                data: saveData
            });
        }else{
            return res.status(204).json({
                status: 204,
                success: false,
                error: 'Profile is not created successfully'
            });
        }
        
    } catch (error) {
        console.error('Error saving profile:', error);
        res.status(500).json({
            status: 500,
            success: false,
            error: 'Internal Server Error'
        });
    }
});

router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.status(200).json({
            status: 200,
            success: true,
            data: profiles
        });
    } catch (error) {
        console.error('Error fetching profiles:', error);
        res.status(500).json({
            status: 500,
            success: false,
            error: 'Internal Server Error'
        });
    }
});

module.exports = router;

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ApplyModal from '../ApplyModal';
import Button from '../Button';
import JobsInfo from '../JobsInfo';

const Jobs = () => {
    return (
        <JobsInfo type='job' url={'http://localhost:3001/user/jobs'}/>
    )
}

export default Jobs
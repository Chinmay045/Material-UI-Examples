import React from 'react'
import { Box, Typography, useTheme } from '@mui/material';

function ThemeProvider() {
    const theme = useTheme();
    return (
        <div>
            <Typography color="primary">
                Hello
            </Typography>
        </div>
    )
}

export default ThemeProvider
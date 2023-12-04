import './App.css';
import React from "react"
import Chart from 'chart.js/auto'
import ReactDOM from 'react-dom/client';



function EnergiesChart() {

    const data = [1, 1, 2, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9]

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    }

    return (
        <div>
        </div>
    );
}

export default EnergiesChart

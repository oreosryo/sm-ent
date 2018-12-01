var charts = [
    {
        chartSelector: "svg#data-viz-1", 
        chartDomain: [0, 40],
        chartTitle: "Net Income in Millions USD (2015 - 2017)", 
        chartData: [
            {
                name: "2015",
                netIncome: 15
            },
            {
                name: "2016",
                netIncome: 21
            },
            {
                name: "2017",
                netIncome: 26.5
            }
        ]
    }, 
    {
        chartSelector: "svg#data-viz-2", 
        chartDomain: [200, 400],
        chartTitle: "Revenue in Millions USD (2015 - 2017)", 
        chartData: [
            {
                name: "2015",
                netIncome: 280
            },
            {
                name: "2016",
                netIncome: 313
            },
            {
                name: "2017",
                netIncome: 350.3
            }
        ]
    }
];

export default charts;
var charts = [
    {
        chartSelector: "svg#data-viz-1", 
        chartDomain: [0, 100],
        chartTitle: "Net Income in Millions USD (2015)", 
        chartData: [
            {
                name: "SM Entertainment",
                netIncome: 15
            },
            {
                name: "YG Entertainment",
                netIncome: 21.11
            },
            {
                name: "JYP Entertainment",
                netIncome: 50.56
            }
        ]
    }, 
    {
        chartSelector: "svg#data-viz-2", 
        chartDomain: [0, 100],
        chartTitle: "Net Income in Millions USD (2016)", 
        chartData: [
            {
                name: "SM Entertainment",
                netIncome: 21
            },
            {
                name: "YG Entertainment",
                netIncome: 12.50
            },
            {
                name: "JYP Entertainment",
                netIncome: 69.51
            }
        ]
    },
    {
        chartSelector: "svg#data-viz-3",
        chartDomain: [0, 100],
        chartTitle: "Net Income in Millions USD (2017)", 
        chartData: [
            {
                name: "SM Entertainment",
                netIncome: 26.5
            },
            {
                name: "YG Entertainment",
                netIncome: 10.94
            },
            {
                name: "JYP Entertainment",
                netIncome: 93.99
            }
        ]
    } 
];

export default charts;
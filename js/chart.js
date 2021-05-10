var ctx = document.getElementById('myChart').getContext("2d")
var myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		datasets: [{
			label: "$",
			borderColor: "#2E5AFE",
			pointBorderColor: "#24DEE7",
			pointBackgroundColor: "#fff",
			pointHoverBackgroundColor: "#24DEE7",
			pointHoverBorderColor: "#fff",
			pointBorderWidth: 12,
			pointHoverRadius: 7,
			pointHoverBorderWidth: 4,
			pointRadius: 3,
			fill: false,
			backgroundColor: "rgba(81, 140, 254, .2)",
			borderWidth: 4,
			data: [ 3000, 1000, 4000, 3000, 6000, 2000, 7000, 4000, 7000]
		}]
	},
	options: {
		legend: {
				position: "none"
		},
		scales: {
			yAxes: [{
				ticks: {
					fontColor: "#BCC6DA",
					fontStyle: "bold",
					beginAtZero: true,
					maxTicksLimit: 5,
					padding: 20,
					display: false,
				},
				gridLines: {
					drawTicks: false,
					display: false,
					color: "#fff"
				}
			}],
			xAxes: [{
				gridLines: {
					zeroLineColor: "transparent",
					drawTicks: false,
					display: false,
					color: "#fff"
				},
				ticks: {
					padding: 20,
					fontColor: "#fff",
					fontStyle: "normal",
					display: true,
				}
			}]
		}
	}
});
// First chart
const Sctx = document.getElementById("myChart");

new Chart(Sctx, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "# Donations per month",
        data: [50, 45, 52, 46, 22, 63, 76, 90, 24, 62, 10, 80],
        borderWidth: 1,
        backgroundColor: "#5CD2E6",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Second Chart
const ctx = document.getElementById("secondChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Greater Accra",
      "Ashanti",
      "Eastern",
      "Western",
      "Central",
      "Northern",
      "Upper East",
      "Upper West",
      "Volta",
      "Bono East",
      "Ahafo",
      "Bono",
      "Savannah",
      "North East",
      "Western North",
      "Oti",
    ],
    datasets: [
      {
        label: "# Regional Analysis",
        data: [50, 45, 52, 46, 22, 63, 76, 90, 24, 62, 10, 80, 1, 20, 90, 30],
        borderWidth: 1,
        backgroundColor: "red",
      },
    ],
  },
  options: {
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

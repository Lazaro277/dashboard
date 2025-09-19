var optionsPie = {
  series: [48, 52],
  chart: {
    width: 380,
    type: "pie",
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    colors: ["#ffe605", "#00d153"],
  },
  labels: ["Online", "Presencial"],
  tooltip: {
    custom: function ({ series, seriesIndex, w }) {
      const label = w.globals.labels[seriesIndex];
      const value = series[seriesIndex];
      const color = w.globals.colors[seriesIndex];

      // Estilo para a fatia verde (Presencial, index 1)
      if (seriesIndex === 1) {
        return `<div style="background-color: ${color}; color: #fff; border: none; padding: 5px 10px; border-radius: 4px; font-family: 'Poppins', sans-serif; font-size: 12px;">
          <span>${label}: ${value}</span>
        </div>`;
      }

      // Estilo padrão (light) para a fatia amarela
      return `<div style="background-color: #ffe605; color: #000; border: none; padding: 5px 10px; border-radius: 4px; font-family: 'Poppins', sans-serif; font-size: 12px;">
        <span>${label}: ${value}</span>
      </div>`;
    },
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#piecharts"), optionsPie);
chart.render();

var optionsBar = {
  series: [
    {
      name: "Comissão",
      data: [55, 80, 105, 100, 110, 120, 115, 113, 119, 117],
    },
  ],
  chart: {
    type: "bar",
    fontFamily: 'Montserrat, Arial, sans-serif',
    foreColor: "#848484",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "20%",
      borderRadius: 1,
      borderRadiusApplication: "end",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ['Jan','Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
    axisBorder: {
        show: false
    },
    axisTicks: {
        show: false
    }
  },
  yaxis: {
    title: {
      text: "R$ (mil)",
    },
  },
  fill: {
    opacity: 1,
    colors: ["#00d153"]
  },
  grid: {
    yaxis: {
        lines: {
            show: false
        }
    }
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "R$ " + val + " mil";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#barcharts"), optionsBar);
chart.render();

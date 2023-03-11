'use client';
import React from 'react';
import type { ChartArea } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ExchangeChartData } from './Data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// Dotted Line
ChartJS.register({
  id: 'dotted-line', //typescript crashes without id
  beforeDraw: function (chart: any, easing: any) {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      let x = chart.tooltip._active[0].element.x;
      let y = chart.scales.y;
      let ctx = chart.ctx;
      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([5, 5]);
      ctx.moveTo(x, y.top);
      ctx.lineTo(x, y.bottom);
      ctx.lineWidth = 1;
      ctx.zIndex = 0;
      ctx.strokeStyle = '#94A3B8';
      ctx.stroke();
      ctx.restore();
    }
  }
});

export const options = {
  responsive: true,

  // Show tag all time
  interaction: {
    mode: 'index' as const,
    intersect: false
  },

  // Hide points break
  elements: {
    point: {
      radius: 0
    }
  },

  // Hide bottom labels
  scales: {
    x: {
      display: false
    },
    y: {
      max: 5.5,
      grid: {
        drawBorder: true,
        color: '#b2b2b285'
      },
      ticks: {
        stepSize: 0.1,
        color: 'white'
      }
    }
  },

  // Hide legend
  plugins: {
    legend: {
      display: false
    },

    tooltip: {
      padding: 8,
      caretSize: 0,
      caretPadding: 16,
      xAlign: 'center',
      yAlign: 'bottom',

      titleFont: {
        size: 14,
        weight: '600'
      },

      bodyFont: {
        size: 12
      },

      displayColors: false,
      borderWidth: 2,
      boxPadding: 4,
      bodyColor: '#000',
      titleColor: '#000',
      backgroundColor: '#FFF',
      borderColor: 'rgba(15, 23, 42, 0.15)',
      callbacks: {
        title: (props: any) => {
          return `${props[0].raw.toLocaleString('pt-br', {
            minimumFractionDigits: 2
          })}`;
        },
        label: (props: any) => {
          return `${props.label}`;
        }
      }
    }
  }
};

const labels = ExchangeChartData.map((d) => d.label);

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 225);

  gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');
  gradient.addColorStop(0.01, '#6366f1');

  return gradient;
}

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: ExchangeChartData.map((d) => d.value),
      borderColor: '#6366f1',
      backgroundColor: ({ chart }: { chart: ChartJS }) =>
        createGradient(chart.ctx, chart.chartArea)
    }
  ]
};

const ExchangeChart = () => {
  return <Line options={options} data={data} />;
};

export default ExchangeChart;

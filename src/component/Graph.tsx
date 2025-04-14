import { BarChart } from '@mui/x-charts/BarChart';

export const Graph=()=>{
    return (
        <BarChart
            series={[
                {data: [500,100,8000,8000]}
            ]}
            height={290}
            width={300}
            xAxis={[
                {
                    scaleType: 'band',
                    data: ['2022', '2023', '2024','2025']
                }
            ]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
    );
}
import { PieChart } from '@mui/x-charts/PieChart';

export const GraphCamembert= () => {

    const piechartData = [
        { id: 0, value: 10, label: 'Janvier' },
        { id: 1, value: 15, label: 'Février' },
        { id: 2, value: 20, label: 'Mars' },
        { id: 3, value: 18, label: 'Avril' },
        { id: 4, value: 15, label: 'Mai' },
        { id: 5, value: 10, label: 'Juin' },
        { id: 6, value: 15, label: 'Juillet' },
        { id: 7, value: 20, label: 'Août' },
        { id: 8, value: 25, label: 'Septembre' },
        { id: 9, value: 30, label: 'Octobre' },
        { id: 10, value: 40, label: 'Novembre' },
        { id: 11, value: 50, label: 'Décembre' },
    ];


    //const valueFormatter = (value) => `${value}%`;

    return (
        <PieChart
            series={[
                {
                    data: piechartData, // Utilisation de la variable piechartData
                    highlightScope: { fade: 'global', highlight: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    //valueFormatter, // Référence à la fonction valueFormatter
                },
            ]}
            width={650}
            height={370}
        />
    );
}
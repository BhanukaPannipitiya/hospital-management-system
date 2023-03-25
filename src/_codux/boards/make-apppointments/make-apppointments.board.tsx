import { createBoard } from '@wixc3/react-board';
import { MakeApppointments } from '../../../components/make-apppointments/make-apppointments';

export default createBoard({
    name: 'MakeApppointments',
    Board: () => <MakeApppointments />,
    environmentProps: {
        canvasHeight: 626,
        canvasWidth: 1002,
    },
});

import { createBoard } from '@wixc3/react-board';
import { Container } from '../../../components/container/container';

export default createBoard({
    name: 'Container',
    Board: () => <Container />,
    environmentProps: {
        canvasWidth: 1030,
        canvasHeight: 686,
    },
});

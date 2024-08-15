import MainCard from 'ui-component/cards/MainCard';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Xarrow, { useXarrow } from 'react-xarrows';
// ==============================|| SAMPLE PAGE ||============================== //

interface Position {
    x: number;
    y: number;
}

interface PosState {
    item1: Position;
    item2: Position;
    item3: Position;
    item4: Position;
    item5: Position;
}

const SamplePage = () => {
    const updateXarrow = useXarrow();

    const [posi, setPosi] = useState<PosState>({
        item1: { x: 0, y: -120 },
        item2: { x: 120, y: 0 },
        item3: { x: 0, y: 0 },
        item4: { x: 0, y: 120 },
        item5: { x: -120, y: 0 }
    });

    const [centerItem, setCenterItem] = useState<keyof PosState>('item3'); // State to track the center item

    useEffect(() => {
        updateXarrow;
    }, [posi, updateXarrow]);

    const handleDragStop = (itemKey: keyof PosState, e: DraggableEvent, data: DraggableData) => {
        const newPos = { x: data.x, y: data.y };

        setPosi((prevState) => {
            const newState = { ...prevState };
            for (let key in prevState) {
                if (key !== itemKey) {
                    const item = prevState[key as keyof PosState];
                    const distX = Math.abs(item.x - newPos.x);
                    const distY = Math.abs(item.y - newPos.y);

                    if (distX <= 50 && distY <= 50) {
                        newState[key as keyof PosState] = { ...prevState[itemKey as keyof PosState] };
                        newState[itemKey as keyof PosState] = { ...item };

                        // Update the centerItem state if the center item is involved in the swap
                        if (key === centerItem) {
                            setCenterItem(itemKey);
                        } else if (itemKey === centerItem) {
                            setCenterItem(key as keyof PosState);
                        }

                        return newState;
                    }
                }
            }
            newState[itemKey as keyof PosState] = newPos;
            return newState;
        });

        setTimeout(updateXarrow, 0);
    };
    return (
        <MainCard title="Tree">
            <Container
                maxWidth={false}
                sx={{
                    height: '60vh',
                    bgcolor: 'lightcyan',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}
            >
                <Draggable
                    bounds="parent"
                    onDrag={updateXarrow}
                    position={posi.item1}
                    onStop={(e, data) => {
                        handleDragStop('item1', e, data);
                    }}
                >
                    <Grid
                        container
                        id="item1"
                        sx={{
                            width: '50px',
                            height: '50px',
                            bgcolor: 'lightblue',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '100%',
                            position: 'absolute'
                        }}
                    >
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <span>1</span>
                        </Grid>
                    </Grid>
                </Draggable>
                <Draggable
                    bounds="parent"
                    onDrag={updateXarrow}
                    position={posi.item2}
                    onStop={(e, data) => {
                        handleDragStop('item2', e, data);
                    }}
                >
                    <Grid
                        container
                        id="item2"
                        sx={{
                            width: '50px',
                            height: '50px',
                            bgcolor: 'lightblue',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '100%',
                            position: 'absolute'
                        }}
                    >
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <span>2</span>
                        </Grid>
                    </Grid>
                </Draggable>
                <Draggable
                    bounds="parent"
                    onDrag={updateXarrow}
                    position={posi.item3}
                    onStop={(e, data) => {
                        handleDragStop('item3', e, data);
                    }}
                >
                    <Grid
                        container
                        id="item3"
                        sx={{
                            width: '50px',
                            height: '50px',
                            bgcolor: 'lightblue',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '100%',
                            position: 'absolute'
                        }}
                    >
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <span>3</span>
                        </Grid>
                    </Grid>
                </Draggable>
                <Draggable
                    bounds="parent"
                    onDrag={updateXarrow}
                    position={posi.item4}
                    onStop={(e, data) => {
                        handleDragStop('item4', e, data);
                    }}
                >
                    <Grid
                        container
                        id="item4"
                        sx={{
                            width: '50px',
                            height: '50px',
                            bgcolor: 'lightblue',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '100%',
                            position: 'absolute'
                        }}
                    >
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <span>4</span>
                        </Grid>
                    </Grid>
                </Draggable>
                <Draggable
                    bounds="parent"
                    onDrag={updateXarrow}
                    position={posi.item5}
                    onStop={(e, data) => {
                        handleDragStop('item5', e, data);
                    }}
                >
                    <Grid
                        container
                        id="item5"
                        sx={{
                            width: '50px',
                            height: '50px',
                            bgcolor: 'lightblue',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '100%',
                            position: 'absolute'
                        }}
                    >
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <span>5</span>
                        </Grid>
                    </Grid>
                </Draggable>
                <Xarrow showHead={false} start={centerItem} end="item1" />
                <Xarrow showHead={false} start={centerItem} end="item2" />
                <Xarrow showHead={false} start={centerItem} end="item3" />
                <Xarrow showHead={false} start={centerItem} end="item4" />
                <Xarrow showHead={false} start={centerItem} end="item5" />
            </Container>
            <Container>{centerItem}</Container>
        </MainCard>
    );
};
export default SamplePage;

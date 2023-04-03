export const options = {
    layout: {
        hierarchical: {
            direction: 'UD',
            nodeSpacing: 150,
            sortMethod : 'directed'
        }
    },
    edges: {
        color: "green",
        width: 1
    },
    nodes: {
        shape: "circle"
    },
    interaction: {
        dragNodes: false,
        dragView: true,
        zoomView: true
    },
    height: `${window.innerHeight}px`,
    physics: {
        enabled: false
    }
};


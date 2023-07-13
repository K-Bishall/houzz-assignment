import { ReactElement } from 'react';

interface EmptyViewProps {
    onClickHere: () => void;
}

const EmptyView = ({onClickHere}: EmptyViewProps): ReactElement => {
    return (
        <div
            className="bg-body-tertiary text-body-secondary text-center"
            style={{height: '70vh', width: '100%', paddingTop: '10em'}}
        >
            <p className="m-0">Nothing to see yet</p>
            <p>
                <span
                    className="m-0 text-primary fw-medium"
                    role="button"
                    onClick={onClickHere}
                >
                    Click here
                </span> to add your first beer!
            </p>
        </div>
    );
};

export default EmptyView;
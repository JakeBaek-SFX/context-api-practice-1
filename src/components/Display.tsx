import type {State} from '../shared/Context';

export const Display = ({count}: State) => {
    return (
        <div className="display">
            {count}
        </div>
    )
}

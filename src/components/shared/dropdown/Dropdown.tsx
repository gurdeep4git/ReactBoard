import React, { Fragment } from 'react'

const Dropdown = ({ label, options, changeHandler }: { label: string, options: string[], changeHandler: any }) => {
    return (
        <div>
            {options.length ?
                <Fragment>
                    <label className="d-block">{label}</label>
                    <select onChange={(e) => changeHandler(e.target.value)}>
                        {options.length &&
                            options.map((opt: string, i: number) => <option key={i} value={opt}>{opt}</option>)
                        }
                    </select>
                </Fragment>
                : null}
        </div>
    )
}

export default Dropdown

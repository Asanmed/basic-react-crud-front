import styled from 'styled-components';

const colors = {
    div: {
        info: {
            font: '#204a8e',
            background: '#c9ddff',
            border: '#4c699b',
        },
        success: {
            font: '#2b7515',
            background: '#ecffd6',
            border: '#617c42',
        },
        warn: {
            font: '#756e15',
            background: '#fffbd1',
            border: '#87803e',
        },
        error: {
            font: '#ba3939',
            background: '#ffe0e0',
            border: '#a33a3a',
        },
    },
    btn: {
        info: {
            font: '#c9ddff',
            background: '#4c699b',
            border: '#4c699b',
        },
        success: {
            font: '#ecffd6',
            background: '#617c42',
            border: '#617c42',
        },
        warn: {
            font: '#fffbd1',
            background: '#87803e',
            border: '#87803e',
        },
        error: {
            font: '#ffe0e0',
            background: '#a33a3a',
            border: '#a33a3a',
        },
    },
};

export const StyledMsgBox = styled.div`
    padding: 1rem;
    margin: 1rem;
    min-width: 70vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    /* THE VARIATIONS */

    ${(props) => {
        if (props.type === 'info') {
            return {
                color: colors.div.info.font,
                background: colors.div.info.background,
                border: `1px solid ${colors.div.info.border}`,
            };
        }
    }}

    ${(props) => {
        if (props.type === 'success') {
            return {
                color: colors.div.success.font,
                background: colors.div.success.background,
                border: `1px solid ${colors.div.success.border}`,
            };
        }
    }}

    ${(props) => {
        if (props.type === 'warn') {
            return {
                color: colors.div.warn.font,
                background: colors.div.warn.background,
                border: `1px solid ${colors.div.warn.border}`,
            };
        }
    }}

    ${(props) => {
        if (props.type === 'error') {
            return {
                color: colors.div.error.font,
                background: colors.div.error.background,
                border: `1px solid ${colors.div.error.border}`,
            };
        }
    }}
`;

export const StyledMsgButton = styled.button`
    padding: 0.5rem;
    font-size: 2rem;
    border-width: 0.1rem;
    background-color: ${colors.primary};
    border-style: solid;
    border-radius: 0.3rem;
    ${(props) => {
        if (props.type === 'info') {
            return {
                color: colors.btn.info.font,
                background: colors.btn.info.background,
                border: `1px solid ${colors.btn.info.border}`,
            };
        }
    }}

    ${(props) => {
        if (props.type === 'success') {
            return {
                color: colors.btn.success.font,
                background: colors.btn.success.background,
                border: `1px solid ${colors.btn.success.border}`,
            };
        }
    }}

    ${(props) => {
        if (props.type === 'warn') {
            return {
                color: colors.btn.warn.font,
                background: colors.btn.warn.background,
                border: `1px solid ${colors.btn.warn.border}`,
            };
        }
    }}

    ${(props) => {
        if (props.type === 'error') {
            return {
                color: colors.btn.error.font,
                background: colors.btn.error.background,
                border: `1px solid ${colors.btn.error.border}`,
            };
        }
    }}
`;

import React from 'react';
import './styles.css';

interface IBreakdownProps {
    hash: string | null;
    host: string | null;
    hostname: string | null;
    href: string | null;
    origin: string | null;
    pathname: string | null;
    port: string | null;
    protocol: string | null;
    params: string | null;
}

const Breakdown: React.FC<IBreakdownProps> = ({hash, host, hostname, href, origin, pathname, port, protocol, params}) => {
    const splitParams = params ? params.slice(1).split('&').map(p => ({ property: p.split('=')[0], value: p.split('=')[1]})) : [];
    console.log("splitParams", splitParams)

    return (
        <div className="breakdown">
            <h3>Base URL</h3>
            {hash && hash.length && <p>Hash: <span>{hash}</span></p>}
            {host && <p><strong>Host:</strong> <code>{host}</code></p>}
            {hostname && <p><strong>Hostname:</strong> <code>{hostname}</code></p>}
            {href && <p><strong>HREF:</strong> <code>{href}</code></p>}
            {origin && <p><strong>Origin:</strong> <code>{origin}</code></p>}
            {pathname && <p><strong>Pathname:</strong> <code>{pathname}</code></p>}
            {port && <p><strong>Port:</strong> <code>{port}</code></p>}

            <h3>Parameters</h3>
            {<p><strong>params:</strong> <span>{params}</span></p>}
            {splitParams.map(p => <p><strong>{p.property}:</strong> <code>{p.value}</code></p>)}
        </div>
    );
}

export default Breakdown;

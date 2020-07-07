import React from 'react';
import _ from 'lodash';

import {Link, safePrefix, classNames} from '../utils';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header" className="header container">
                <Link to={safePrefix('/')} className="logo">{_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)}</Link>
                {(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null) && _.get(this.props, 'pageContext.site.siteMetadata.header.has_nav', null)) && (
                <nav>
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null), (item, item_idx) => (
                    <Link key={item_idx} className={classNames('nav-link', {'active': _.get(this.props, 'pageContext.url', null) === _.get(item, 'url', null)})} to={(_.get(item, 'url', null).startsWith('#') ? (_.get(item, 'url', null)) : safePrefix(_.get(item, 'url', null)))}{...(_.get(item, 'new_window', null) ? ({target: '_blank', rel: 'noopener'}) : null)}>{_.get(item, 'label', null)}</Link>
                    ))}
                </nav>
                )}
            </header>
        );
    }
}

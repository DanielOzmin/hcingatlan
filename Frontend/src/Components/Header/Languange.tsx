const Languange = ({i18n}:any) => {

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value)
    }

    return (
        <select className="languanges" onChange={changeLanguage} value={i18n.language}>
            <option value="hu">🇭🇺 HU</option>
            <option value="en">🇬🇧 EN</option>
            <option value="de">🇩🇪 DE</option>
            <option value="sk">🇸🇰 SK</option>
        </select>
    )
}

export default Languange
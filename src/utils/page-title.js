import settings from '@/settings'

const title = settings.title || 'Vue Admin'
export default function getPageTitle(preTitle) {
    if (preTitle) return (preTitle + ' - ' + title)
    return title
}

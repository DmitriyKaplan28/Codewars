class FileNameExtractor {
    static extractFileName(filename) {
        let [prefix, ext] = filename.split('.')
        prefix = prefix.split('_').slice(1).join('_')
        return prefix.concat('.', ext)
    }
}
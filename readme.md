# How to Resize WebpImage ShortCode

### Download Webpbinary

First Of all Download the Webp Binaries and setup using this:[Webp Biaries](https://developers.google.com/speed/webp/download).

### Clone the hugo 
Then Clone the hugo using this link : [git CLone](https://github.com/blaubaer/hugo.git).
If the Hugo Setup Successfully then set the path of hugo repo.  

### Install go
afeter set path you can install go using below command.
```
go install
```
### Create ShortCode for Resize WebpImages
example 
`{{ $imageResource := .Page.Resources.GetMatch "*.webp" }}
{{ $resized := $imageResource.Resize "300px" }}
{{ $resized.RelPermalink }}`
    <head>

# How to Deploy Project

First of all in Run the following command for creating build for your site
```
hugo -D
```
then copy the public folder and paste in to git->public repo
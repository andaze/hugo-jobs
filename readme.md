# Introduction
## How to Run this project
hugo server --config config.toml,config_devlop.toml
### Install Go
[Install go link](https://golang.org/doc/install)

### Download Webpbinary

First Of all Download the Webp Binaries and setup using this:[Webp Biaries](https://developers.google.com/speed/webp/download).

### Clone the hugo 
Then Clone the hugo using this link : [git CLone](https://github.com/blaubaer/hugo.git).
  
### Covert all  Images into Webp Using below command
first set the root folder of your project and then run the following command. 
1. png:- 
```
find ./ -type f -name '*.png' -exec sh -c 'cwebp -q 75 $1 -o "${1%.png}.webp"' _ {} \;
```
2. jpg:- 
```
find ./ -type f -name '*.jpg' -exec sh -c 'cwebp -q 75 $1 -o "${1%.jpg}.webp"' _ {} \;
```
3. gif:- 
```
find ./ -type f -name '*.gif' -exec sh -c 'cwebp -q 75 $1 -o "${1%.gif}.webp"' _ {} \;
```
4. PNG:- 
```
find ./ -type f -name '*.PNG' -exec sh -c 'cwebp -q 75 $1 -o "${1%.PNG}.webp"' _ {} \;
```
5. JPG:- 
```
find ./ -type f -name '*.JPG' -exec sh -c 'cwebp -q 75 $1 -o "${1%.JPG}.webp"' _ {} \;
```
6. GIF:-
```
find ./ -type f -name '*.GIF' -exec sh -c 'cwebp -q 75 $1 -o "${1%.GIF}.webp"' _ {} \;
```

### Checkout branch: add-webp-support

### Change folder hugo and Install go
If the Hugo Setup Successfully then set the path of hugo repo.
```
cd hugo
```
afeter set path you can install go using below command.
```
go install
```

### check you user profile folder has hugo as per following path
```
C:\Users\ashish\go\bin
```

### check hugo verison need to following
```
hugo version
```
output:= Hugo Static Site Generator v0.69.0-DEV windows/amd64 BuildDate: unknown


### Create ShortCode for Resize WebpImages
then create shortcode for resize your webp images using below example 
Example of resize Images using Shortcode    

```html
{{ $src := .Page.Resources.GetMatch (printf "*%s*" (.Get 0)) }}
{{ $type_arr := split $src "." }}
{{ $srcbase := index $type_arr 0 }}
{{ $webp := print $srcbase ".webp" }}
{{ $webpsrc := .Page.Resources.GetMatch (printf "*%s*" ($webp)) }}
{{ $size1 := .Get 1 }}
{{ $size2 := .Get 2 }}
{{ $size3 := .Get 3}}

{{ $smallw := printf "%s%s" $size1 "x" }}
{{ $mediumw := printf "%s%s" $size2 "x" }}
{{ $largew := printf "%s%s" $size3 "x" }}
 
{{ if eq (index $type_arr 1) ("webp") }}
  {{ $small := $src.Resize $smallw }}
  {{ $medium := $src.Resize $mediumw }}
  {{ $large := $src.Resize $largew }}
  <figure>
    <picture>
      <img srcset='
          {{ with $large.RelPermalink }}{{.}} 2500w{{ end }}
        {{ with $medium.RelPermalink }}, {{.}} 1024w{{ end }}
        {{ with $small.RelPermalink }}, {{.}} 640w{{ end }}
      ' sizes="(max-width: 375px) $size1,
      (max-width: 768px) $size2,
      $size3"
      src="{{ $src.RelPermalink }}"
      />
    </picture>
  </figure>
{{ else }}
<figure>
  <picture>
  {{ $small := $src.Resize $smallw }}
  {{ $medium := $src.Resize $mediumw }}
  {{ $large := $src.Resize $largew }}
  {{ if $webpsrc }}
  {{ $smallwebp := $webpsrc.Resize $smallw }}
  {{ $mediumwebp := $webpsrc.Resize $mediumw }}
  {{ $largewebp := $webpsrc.Resize $largew }}
  <source srcset='
  {{ with $largewebp.RelPermalink }}{{.}} 2500w{{ end }}
  {{ with $mediumwebp.RelPermalink }}, {{.}} 1024w{{ end }}
  {{ with $smallwebp.RelPermalink }}, {{.}} 640w{{ end }}
  ' sizes="(max-width: 375px) $size1,
  (max-width: 768px) $size2,
  $size3"> 
  {{ end }}

      <source srcset='
      {{ with $large.RelPermalink }}{{.}} 2500w{{ end }}
      {{ with $medium.RelPermalink }}, {{.}} 1024w{{ end }}
      {{ with $small.RelPermalink }}, {{.}} 640w{{ end }}
      ' sizes="(max-width: 375px) $size1,
      (max-width: 768px) $size2,
      $size3">
      
            
      
      <img src="{{ $src.RelPermalink }}"
      />
    </picture>
  </figure>
{{ end }}
```
This example create in themes/layouts/shortcode folder.
shortcode of above Example:- {{< imagedisplay image "290" "640" "1024">}}

# How to Deploy Project

First of all in Run the following command for creating build for your site
```
hugo -D
```
then copy the public folder and paste in to git->public repo
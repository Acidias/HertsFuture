yarn build
cd build
aws s3 sync . s3://hertsfuture.co.uk   
aws cloudfront create-invalidation --distribution-id E2GH61412PGZGS --paths '/*'

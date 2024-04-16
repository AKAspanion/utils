source ./scripts/package-list.sh

for package in "${package_all_arr[@]}"; do
    cd apps/app/public/
    mkdir $package

    cd ../../../
done

# test-artifact-registry

This branch add a dependency on @galigeo-store/auth-lib

# Full build log

```
starting build "d563ec94-3b38-4078-969a-ef3fda74feb7"

FETCHSOURCE
BUILD
Starting Step #0 - "fetch"
Step #0 - "fetch": Pulling image: eu.gcr.io/gae-runtimes/utilities/gcs-fetcher:base_20230521_18_04_RC00
Step #0 - "fetch": base_20230521_18_04_RC00: Pulling from gae-runtimes/utilities/gcs-fetcher
Step #0 - "fetch": Digest: sha256:a257dd036ce819dc2b166ad85b1d48624e50c7636a445022d7500e1321dade73
Step #0 - "fetch": Status: Downloaded newer image for eu.gcr.io/gae-runtimes/utilities/gcs-fetcher:base_20230521_18_04_RC00
Step #0 - "fetch": eu.gcr.io/gae-runtimes/utilities/gcs-fetcher:base_20230521_18_04_RC00
Step #0 - "fetch": Fetching manifest gs://staging.retail-poi-service.appspot.com/ae/a37f9af1-dffb-4b15-b0a2-7afdf5a28268/manifest.json.
Step #0 - "fetch": Processing 16 files.
Step #0 - "fetch": ******************************************************
Step #0 - "fetch": Status:                      SUCCESS
Step #0 - "fetch": Started:                     2023-06-23T12:41:49Z
Step #0 - "fetch": Completed:                   2023-06-23T12:41:49Z
Step #0 - "fetch": Requested workers:    200
Step #0 - "fetch": Actual workers:        16
Step #0 - "fetch": Total files:           16
Step #0 - "fetch": Total retries:          0
Step #0 - "fetch": GCS timeouts:           0
Step #0 - "fetch": MiB downloaded:         0.08 MiB
Step #0 - "fetch": MiB/s throughput:       0.99 MiB/s
Step #0 - "fetch": Time for manifest:     66.43 ms
Step #0 - "fetch": Total time:             0.14 s
Step #0 - "fetch": ******************************************************
Finished Step #0 - "fetch"
Starting Step #1 - "pre-buildpack"
Step #1 - "pre-buildpack": Pulling image: eu.gcr.io/gae-runtimes/utilities/buildpack-shim:base_20230521_18_04_RC00
Step #1 - "pre-buildpack": base_20230521_18_04_RC00: Pulling from gae-runtimes/utilities/buildpack-shim
Step #1 - "pre-buildpack": Digest: sha256:5916d4b5491ac4395897c56348a0b7d65c1efec8ae11ce515dd5f4e68a538029
Step #1 - "pre-buildpack": Status: Downloaded newer image for eu.gcr.io/gae-runtimes/utilities/buildpack-shim:base_20230521_18_04_RC00
Step #1 - "pre-buildpack": eu.gcr.io/gae-runtimes/utilities/buildpack-shim:base_20230521_18_04_RC00
Step #1 - "pre-buildpack": Preparing directory /layers
Step #1 - "pre-buildpack": Preparing directory /workspace
Step #1 - "pre-buildpack": Preparing directory /builder/home
Step #1 - "pre-buildpack": Preparing directory /builder/outputs
Step #1 - "pre-buildpack": Preparing directory /platform/env
Step #1 - "pre-buildpack": Passing build environment variable BUILDER_OUTPUT to buildpacks
Step #1 - "pre-buildpack": Passing build environment variable GOOGLE_DEBUG to buildpacks
Step #1 - "pre-buildpack": Passing build environment variable GOOGLE_RUNTIME to buildpacks
Step #1 - "pre-buildpack": Passing build environment variable GOOGLE_LABEL_BUILDER_VERSION to buildpacks
Step #1 - "pre-buildpack": Passing build environment variable GOOGLE_LABEL_BUILDER_IMAGE to buildpacks
Step #1 - "pre-buildpack": Passing build environment variable GOOGLE_LABEL_RUN_IMAGE to buildpacks
Step #1 - "pre-buildpack": Passing build environment variable GOOGLE_RUNTIME_VERSION to buildpacks
Step #1 - "pre-buildpack": Passing build environment variable X_GOOGLE_SKIP_RUNTIME_LAUNCH to buildpacks
Step #1 - "pre-buildpack": Passing build environment variable GAE_APP_ENGINE_APIS to buildpacks
Step #1 - "pre-buildpack": Passing build environment variable X_GOOGLE_TARGET_PLATFORM to buildpacks
Step #1 - "pre-buildpack": Passing build environment variable GOOGLE_EXPERIMENTAL_NODEJS_NPM_BUILD_ENABLED to buildpacks
Step #1 - "pre-buildpack": Retagging eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:latest as eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:d563ec94-3b38-4078-969a-ef3fda74feb7
Step #1 - "pre-buildpack": Checking if image eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:latest exists
Step #1 - "pre-buildpack": Image eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:latest exists
Step #1 - "pre-buildpack": DEBUG: "eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:latest"(eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:latest) took 256.981231ms
Step #1 - "pre-buildpack": Checking if image eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:latest is valid
Step #1 - "pre-buildpack": DEBUG: ...pull("eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:latest") took 254.339615ms
Step #1 - "pre-buildpack": DEBUG: ...validate("eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:latest") took 102.172136ms
Step #1 - "pre-buildpack": Image eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:latest is valid
Step #1 - "pre-buildpack": DEBUG: "eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:latest"(eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:latest) took 356.860196ms
Step #1 - "pre-buildpack": Image eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:latest copied to eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:d563ec94-3b38-4078-969a-ef3fda74feb7
Step #1 - "pre-buildpack": DEBUG: "eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:latest", "eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:d563ec94-3b38-4078-969a-ef3fda74feb7"(eu.gcr.io/retail-poi-service/app-engine-tmp/build-cache/default/ttl-7d:latest) took 1.432341339s
Finished Step #1 - "pre-buildpack"
Starting Step #2 - "build"
Step #2 - "build": Pulling image: eu.gcr.io/gae-runtimes/buildpacks/google-gae-18/nodejs/builder:nodejs_20230622_RC00
Step #2 - "build": nodejs_20230622_RC00: Pulling from gae-runtimes/buildpacks/google-gae-18/nodejs/builder
Step #2 - "build": 53e5e158da5a: Already exists
Step #2 - "build": 7577c9c60d3f: Already exists
Step #2 - "build": 3c2cba919283: Already exists
Step #2 - "build": 5d0cbafd5d7a: Already exists
Step #2 - "build": addc9124f6e8: Already exists
Step #2 - "build": 827d5691fc07: Already exists
Step #2 - "build": 19233bba3bc8: Already exists
Step #2 - "build": 98ab490c9853: Already exists
Step #2 - "build": dc662b74909b: Pulling fs layer
Step #2 - "build": 4df74b81db3a: Pulling fs layer
Step #2 - "build": 9ec8a14bdc09: Pulling fs layer
Step #2 - "build": 1d7b65ef11b3: Pulling fs layer
Step #2 - "build": 937b7e9444c3: Pulling fs layer
Step #2 - "build": 06f428a8446f: Pulling fs layer
Step #2 - "build": b63bd9bb2674: Pulling fs layer
Step #2 - "build": 2b343de4a84f: Pulling fs layer
Step #2 - "build": 6e482d00355e: Pulling fs layer
Step #2 - "build": 1a727546856e: Pulling fs layer
Step #2 - "build": 3775426fcb08: Pulling fs layer
Step #2 - "build": fd8d51dcd986: Pulling fs layer
Step #2 - "build": e0c603388230: Pulling fs layer
Step #2 - "build": 1e55e70c6594: Pulling fs layer
Step #2 - "build": b0f39de464a5: Pulling fs layer
Step #2 - "build": 176de0dba93d: Pulling fs layer
Step #2 - "build": 381c0c1bb587: Pulling fs layer
Step #2 - "build": 861d8c391b5b: Pulling fs layer
Step #2 - "build": 8426b50d84e6: Pulling fs layer
Step #2 - "build": e7a09445ee13: Pulling fs layer
Step #2 - "build": 4f4fb700ef54: Pulling fs layer
Step #2 - "build": 06f428a8446f: Waiting
Step #2 - "build": b63bd9bb2674: Waiting
Step #2 - "build": 2b343de4a84f: Waiting
Step #2 - "build": 6e482d00355e: Waiting
Step #2 - "build": 1a727546856e: Waiting
Step #2 - "build": 3775426fcb08: Waiting
Step #2 - "build": 1d7b65ef11b3: Waiting
Step #2 - "build": 937b7e9444c3: Waiting
Step #2 - "build": fd8d51dcd986: Waiting
Step #2 - "build": 861d8c391b5b: Waiting
Step #2 - "build": e0c603388230: Waiting
Step #2 - "build": 1e55e70c6594: Waiting
Step #2 - "build": b0f39de464a5: Waiting
Step #2 - "build": 176de0dba93d: Waiting
Step #2 - "build": 381c0c1bb587: Waiting
Step #2 - "build": 8426b50d84e6: Waiting
Step #2 - "build": e7a09445ee13: Waiting
Step #2 - "build": 4f4fb700ef54: Waiting
Step #2 - "build": dc662b74909b: Verifying Checksum
Step #2 - "build": dc662b74909b: Download complete
Step #2 - "build": 9ec8a14bdc09: Verifying Checksum
Step #2 - "build": 9ec8a14bdc09: Download complete
Step #2 - "build": 4df74b81db3a: Verifying Checksum
Step #2 - "build": 4df74b81db3a: Download complete
Step #2 - "build": 1d7b65ef11b3: Verifying Checksum
Step #2 - "build": 1d7b65ef11b3: Download complete
Step #2 - "build": 937b7e9444c3: Verifying Checksum
Step #2 - "build": 937b7e9444c3: Download complete
Step #2 - "build": 06f428a8446f: Verifying Checksum
Step #2 - "build": 06f428a8446f: Download complete
Step #2 - "build": dc662b74909b: Pull complete
Step #2 - "build": 2b343de4a84f: Verifying Checksum
Step #2 - "build": 2b343de4a84f: Download complete
Step #2 - "build": 6e482d00355e: Verifying Checksum
Step #2 - "build": 6e482d00355e: Download complete
Step #2 - "build": 4df74b81db3a: Pull complete
Step #2 - "build": b63bd9bb2674: Verifying Checksum
Step #2 - "build": b63bd9bb2674: Download complete
Step #2 - "build": 1a727546856e: Download complete
Step #2 - "build": 3775426fcb08: Verifying Checksum
Step #2 - "build": 3775426fcb08: Download complete
Step #2 - "build": 9ec8a14bdc09: Pull complete
Step #2 - "build": fd8d51dcd986: Verifying Checksum
Step #2 - "build": fd8d51dcd986: Download complete
Step #2 - "build": e0c603388230: Download complete
Step #2 - "build": b0f39de464a5: Verifying Checksum
Step #2 - "build": b0f39de464a5: Download complete
Step #2 - "build": 1e55e70c6594: Verifying Checksum
Step #2 - "build": 1e55e70c6594: Download complete
Step #2 - "build": 381c0c1bb587: Verifying Checksum
Step #2 - "build": 381c0c1bb587: Download complete
Step #2 - "build": 176de0dba93d: Verifying Checksum
Step #2 - "build": 176de0dba93d: Download complete
Step #2 - "build": 8426b50d84e6: Verifying Checksum
Step #2 - "build": 8426b50d84e6: Download complete
Step #2 - "build": e7a09445ee13: Verifying Checksum
Step #2 - "build": e7a09445ee13: Download complete
Step #2 - "build": 1d7b65ef11b3: Pull complete
Step #2 - "build": 861d8c391b5b: Verifying Checksum
Step #2 - "build": 861d8c391b5b: Download complete
Step #2 - "build": 4f4fb700ef54: Verifying Checksum
Step #2 - "build": 4f4fb700ef54: Download complete
Step #2 - "build": 937b7e9444c3: Pull complete
Step #2 - "build": 06f428a8446f: Pull complete
Step #2 - "build": b63bd9bb2674: Pull complete
Step #2 - "build": 2b343de4a84f: Pull complete
Step #2 - "build": 6e482d00355e: Pull complete
Step #2 - "build": 1a727546856e: Pull complete
Step #2 - "build": 3775426fcb08: Pull complete
Step #2 - "build": fd8d51dcd986: Pull complete
Step #2 - "build": e0c603388230: Pull complete
Step #2 - "build": 1e55e70c6594: Pull complete
Step #2 - "build": b0f39de464a5: Pull complete
Step #2 - "build": 176de0dba93d: Pull complete
Step #2 - "build": 381c0c1bb587: Pull complete
Step #2 - "build": 861d8c391b5b: Pull complete
Step #2 - "build": 8426b50d84e6: Pull complete
Step #2 - "build": e7a09445ee13: Pull complete
Step #2 - "build": 4f4fb700ef54: Pull complete
Step #2 - "build": Digest: sha256:e92b4b89c50941b500a30a38f531694936caf2547bf04a1e474621d9c46d184c
Step #2 - "build": Status: Downloaded newer image for eu.gcr.io/gae-runtimes/buildpacks/google-gae-18/nodejs/builder:nodejs_20230622_RC00
Step #2 - "build": eu.gcr.io/gae-runtimes/buildpacks/google-gae-18/nodejs/builder:nodejs_20230622_RC00
Step #2 - "build": ===> ANALYZING
Step #2 - "build": Image with name "eu.gcr.io/retail-poi-service/app-engine-tmp/app/default/ttl-18h:a37f9af1-dffb-4b15-b0a2-7afdf5a28268" not found
Step #2 - "build": ===> DETECTING
Step #2 - "build": google.nodejs.runtime    1.0.0
Step #2 - "build": google.nodejs.npm        1.0.0
Step #2 - "build": google.nodejs.appengine  0.9.0
Step #2 - "build": google.utils.label-image 0.0.2
Step #2 - "build": ===> RESTORING
Step #2 - "build": Restoring metadata for "google.nodejs.runtime:node" from cache
Step #2 - "build": Restoring metadata for "google.nodejs.npm:npm_modules" from cache
Step #2 - "build": Restoring data for "google.nodejs.runtime:node" from cache
Step #2 - "build": Restoring data for "google.nodejs.npm:npm_modules" from cache
Step #2 - "build": ===> BUILDING
Step #2 - "build": === Node.js - Runtime (google.nodejs.runtime@1.0.0) ===
Step #2 - "build": Using runtime version from GOOGLE_RUNTIME_VERSION: 14.21.3
Step #2 - "build": DEBUG: ***** CACHE MISS: "nodejs"
Step #2 - "build": Installing Node.js v14.21.3.
Step #2 - "build": 2023/06/23 12:42:07 [DEBUG] GET https://dl.google.com/runtimes/ubuntu1804/nodejs/nodejs-14.21.3.tar.gz
Step #2 - "build": Warning: BOM table is deprecated in this buildpack api version, though it remains supported for backwards compatibility. Buildpack authors should write BOM information to <layer>.sbom.<ext>, launch.sbom.<ext>, or build.sbom.<ext>.
Step #2 - "build": Warning: BOM table is deprecated in this buildpack api version, though it remains supported for backwards compatibility. Buildpack authors should write BOM information to <layer>.sbom.<ext>, launch.sbom.<ext>, or build.sbom.<ext>.
Step #2 - "build": Warning: BOM table is deprecated in this buildpack api version, though it remains supported for backwards compatibility. Buildpack authors should write BOM information to <layer>.sbom.<ext>, launch.sbom.<ext>, or build.sbom.<ext>.
Step #2 - "build": === Node.js - Npm (google.nodejs.npm@1.0.0) ===
Step #2 - "build": DEBUG: Configuring NPM credentials for: //europe-west9-npm.pkg.dev/retail-poi-service/galigeo-store/
Step #2 - "build": --------------------------------------------------------------------------------
Step #2 - "build": Running "node -v"
Step #2 - "build": v14.21.3
Step #2 - "build": Done "node -v" (58.028979ms)
Step #2 - "build": DEBUG: Current dependency hash: "917e73f5bde7f358a232497073a79cfeb0cd2f4a01ebeb7637b836dd46782566"
Step #2 - "build": DEBUG:   Cache dependency hash: "a231ddaf3eb8cdfd244ecb261c38c1cf9869317fd43bc1cae33db901c6aaf309"
Step #2 - "build": DEBUG: ***** CACHE MISS: "npm_modules"
Step #2 - "build": Installing application dependencies.
Step #2 - "build": --------------------------------------------------------------------------------
Step #2 - "build": Running "node -v"
Step #2 - "build": v14.21.3
Step #2 - "build": Done "node -v" (7.680881ms)
Step #2 - "build": --------------------------------------------------------------------------------
Step #2 - "build": Running "npm --version"
Step #2 - "build": 6.14.18
Step #2 - "build": Done "npm --version" (225.400284ms)
Step #2 - "build": --------------------------------------------------------------------------------
Step #2 - "build": Running "npm ci --quiet (NODE_ENV=development)"
Step #2 - "build": npm ERR! Cannot read property '@galigeo-store/auth-lib' of undefined
Step #2 - "build": 
Step #2 - "build": npm ERR! A complete log of this run can be found in:
Step #2 - "build": npm ERR!     /www-data-home/.npm/_logs/2023-06-23T12_42_10_910Z-debug.log
Step #2 - "build": Done "npm ci --quiet (NODE_ENV=development)" (557.46067ms)
Step #2 - "build": Failure: (ID: beaf8772) npm ERR! Cannot read property '@galigeo-store/auth-lib' of undefined
Step #2 - "build": 
Step #2 - "build": npm ERR! A complete log of this run can be found in:
Step #2 - "build": npm ERR!     /www-data-home/.npm/_logs/2023-06-23T12_42_10_910Z-debug.log
Step #2 - "build": --------------------------------------------------------------------------------
Step #2 - "build": Running "mv -f /builder/outputs/output-3345311558295091222 /builder/outputs/output"
Step #2 - "build": Done "mv -f /builder/outputs/output-3345311558295091222 /builder/o..." (35.025294ms)
Step #2 - "build": ERROR: failed to build: exit status 1
Finished Step #2 - "build"
ERROR
ERROR: build step 2 "eu.gcr.io/gae-runtimes/buildpacks/google-gae-18/nodejs/builder:nodejs_20230622_RC00" failed: step exited with non-zero status: 51


```


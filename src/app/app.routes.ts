import { Routes } from '@angular/router';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { FeatureMatrixComponent } from './feature-matrix/feature-matrix.component';
import { PrimaryMatrixComponent } from './primary-matrix/primary-matrix.component';

export const routes: Routes = [
    {path:"cover-page", component:CoverPageComponent},
    {path:"feature-matrix", component:FeatureMatrixComponent},
    {path:"primary-mapping", component:PrimaryMatrixComponent}

];

import { Geometry, Material, Mesh, Texture } from 'three';

export interface MeshWrapper {
  tex: Texture,
  material: Material,
  geometry: Geometry,
  mesh: Mesh
}

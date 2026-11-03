import { BufferGeometry, Material, Mesh, Texture } from 'three';

export interface MeshWrapper {
  tex: Texture,
  material: Material,
  geometry: BufferGeometry,
  mesh: Mesh
}

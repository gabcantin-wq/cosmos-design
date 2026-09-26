from pathlib import Path
import json, math
import sympy as s

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'calculs'
OUT.mkdir(exist_ok=True)
R=s.Rational('206.7682827')
me=s.Rational('0.51099895069')
Q=s.Rational('1836.152673426')
mtau=s.Rational('1776.93')
tmu=s.Rational('2.1969811e-6')
ttau=s.Rational('290.3e-15')
I2=R-1
I3=mtau/me-R
mu_mass=me*R
Y=4*I2/s.pi
Rrad=R*(1+Q)/(R+Q)
a0=s.Rational('5.29177210544e-11')
a_e=a0*(1+Q)/Q
a_mu=a0*(R+Q)/(R*Q)

# Historical relation: exact algebra and identifiability.
X,u,th,L,w=s.symbols('X u theta L w', positive=True)
geometry=(2*th*L**2/2)/(2*L*w)
assert s.simplify(geometry-th*L/(2*w))==0
family=2*I2/(th*(1-6*u))
assert s.simplify(1+th*family*(1-6*u)/2-R)==0

# External reduced-mass comparison: radius adds no structural rank
# if it is predicted from the same single mass ratio.
r=s.symbols('r',positive=True)
q=s.symbols('q',positive=True)
assert s.simplify(s.diff(r*(1+q)/(r+q),r)-q*(1+q)/(r+q)**2)==0
F=1+s.pi*X*(1-6*u)/4
H=F*(1+Q)/(F+Q)
jac=s.Matrix([F,H]).jacobian([X,u])
assert s.simplify(jac.det())==0

# Relativistic external bridge: speed derived from energy once a mass is supplied.
m,c,K=s.symbols('m c K',positive=True)
energy=m*c**2+K
v=c*s.sqrt(1-(m*c**2/energy)**2)
momentum=s.sqrt(energy**2-m**2*c**4)/c
assert s.simplify(v-c**2*momentum/energy)==0
assert s.limit(v,K,0)==0
assert s.limit(v,K,s.oo)==c

# Conditional survival law: operational observation time, not flowing T.
dt,qsurv,n=s.symbols('dt qsurv n',positive=True)
# qsurv = 1-p, with 0 < qsurv < 1 in the physical candidate.
tau=-dt/s.log(qsurv)
assert s.simplify(s.exp(-(n*dt)/tau)-qsurv**n)==0

def num(x): return float(s.N(x,17))
report={
 'scope':'Calculs conditionnels, tests de comparaison et non-identifiabilite ; aucune masse derivee de 4df.',
 'inputs':{
  'electron_mass_MeV_c2':float(me),'muon_electron_ratio':float(R),'proton_electron_ratio':float(Q),
  'tau_mass_MeV_c2':float(mtau),'muon_lifetime_s':float(tmu),'tau_lifetime_s':float(ttau),
  'Bohr_radius_m':float(a0)},
 'mass_bookkeeping':{'muon_mass_from_ratio_MeV_c2':num(mu_mass),'tau_electron_ratio':num(mtau/me),
  'tau_muon_ratio':num(mtau/mu_mass),'I2':num(I2),'I3':num(I3),'I3_over_I2':num(I3/I2)},
 'historical_geometry':{
  'effective_X_theta_pi_over_2':num(Y),'effective_X_theta_pi':num(Y/2),
  'r_V2':num(Y/2),
  'families_pi_over_2':[{'u':uv,'X':num(Y/(1-6*s.Rational(str(uv))))} for uv in (0,0.01,0.05,0.10)],
  'not_new_cycle_count':True},
 'reduced_mass_external':{
  'radius_ratio_e_over_mu':num(Rrad),'inverse_ratio':num(1/Rrad),
  'Bohr_scale_e_m':num(a_e),'Bohr_scale_mu_m':num(a_mu),
  'relative_difference_from_mass_ratio':num(Rrad/R-1),
  'mass_times_radius_mu_over_e':num(R/Rrad),
  'jacobian_determinant_mass_plus_predicted_radius':'0'},
 'adversarial_equal_increments':{
  'tau_prediction_MeV_c2':num(me*(1+2*I2)),
  'relative_residual':num(me*(1+2*I2)/mtau-1),
  'status':'REJETE pour cette hypothese seulement ; ne refute pas toutes les geometries V3.'},
 'adversarial_constant_cost_times_lifetime':{
  'predicted_tau_lifetime_s':num(tmu*I2/I3),
  'predicted_over_observed':num(tmu*I2/I3/ttau),
  'status':'REJETE pour le produit constant avec increments I2/I3.'},
 'symbolic_checks':{'sector_ratio':True,'continuous_X_u_family':True,
   'radius_mass_rank_deficiency':True,'kinematics_identity_and_limits':True,'conditional_survival':True},
 'uncomputed':['muon mass from structure','tau mass from structure','neutrino masses',
  'intrinsic lifetime from structure','surface-to-additional-cycle map']
}
(OUT/'RESULTATS_PREMIERE_PASSE.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(report,ensure_ascii=False,indent=2))
